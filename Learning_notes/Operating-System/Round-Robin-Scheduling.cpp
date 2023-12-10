#include<stdio.h>

int waitingTime(int n, int q,int pid[],int BT[], int REM_BT[],int WT[]){
    int completed = 0;
    int t = 0;
    
    while(completed  < n){
        int i = 0;
        for(i = 0; i < n; i++){
            if(REM_BT[i] != 0){
                if(REM_BT[i] > q){
                t += q;
                REM_BT[i] -= q;
                }
                else{
                    t += REM_BT[i];
                    WT[i] = t - BT[i];
                    REM_BT[i] = 0;
                    completed++;
                }
            }
        }
    }
    return 1;
}

void turnAroundTime(int n, int WT[],int BT[], int TT[]){
    for (int i = 0; i < n ; i++){
        TT[i] = BT[i] + WT[i];
    }

}

void average(int n ,int WT[] , int TAT[]){
    float TWT = 0 , TTAT = 0 , AWT , ATAT ;
    for(int i=0 ; i<n ; i++){
       TWT += WT[i];
       TTAT += TAT[i];
    }
    AWT = TWT/n;
    ATAT = TTAT/n;

    printf ("\n\nAverage waiting time : %.2f" ,AWT);
    printf ("\nAverage turn around time : %.2f\n\n" ,ATAT);
}
void printArr(int n, int P[], int BT[], int WT[], int TT[])
{
    printf("Process Id\tBurst Time\tWaiting Time\tTurn Around Time\n");
    for(int i=0; i<n; i++)
    {
        printf("P%d\t\t %d\t\t %d\t\t %d\n", P[i], BT[i], WT[i], TT[i]);
    }
}

int main(){
    int n,q;
    printf("Enter the total number of process: \n");
    scanf("%d", &n);
    printf("Enter Quantum number: \n");
    scanf("%d", &q);
    int P[100], BT[100], WT[100] = {0}, TT[100] , REM_BT[100] = {0};
    printf("Enter Pid and BT :\n");
    for(int i = 0; i < n; i++){
        scanf("%d%d", &P[i], &BT[i]);
        REM_BT[i] = BT[i];
    }
    waitingTime(n, q, P, BT,REM_BT, WT);
    turnAroundTime(n,WT,BT,TT);
    printArr(n ,P, BT, WT,TT);
    average(n,WT,TT);
}
