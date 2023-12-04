
#include<stdio>

int waitingTime(int n, int pid[],int AT[], int BT[], int WT[], int Pr[]){
    int rem_bt[100];
    for (int i = 0; i < n; i++)
    {
        rem_bt[i] = BT[i];
    }
    int completed = 0;
    int t = 0;
    while (completed < n){
        int s = 100;
        int m = 100;
        for (int i = 0; i < n; i++){
            if (AT[i] <= t && rem_bt[i] > 0 && Pr[i] < m){
                m = Pr[i];
                s = i;
            }
            else if(AT[i] <= t && rem_bt[i] > 0 && Pr[i] == m && AT[i] < AT[s]){
                m = Pr[i];
                s = i;
            }
            else if(AT[i] <= t && rem_bt[i] > 0 && Pr[i] == m && AT[i] == AT[s] && pid[i] < pid[s]){
                m = Pr[i];
                s = i;
            }
            else{
                //
            }  
        }

        if (s == 100)
        {
            t++;
            continue;
        }

        rem_bt[s]--;

        if (rem_bt[s] == 0){
            completed++;
            WT[s] = t + 1  - AT[s] - BT[s];
        }
        t++;
        printf("t: %d, s: %d, m: %d, completed: %d\n", t, s, m, completed);
    }
    return 1;
}

void turnAroundTime(int n, int WT[],int BT[], int TT[])
{
    for(int i=0; i<n; i++)
    {
        TT[i] = BT[i] + WT[i];
    }
}
void printArr(int n, int P[], int Pr[], int BT[], int WT[], int TT[], int AT[])
{
    printf("Process Id\tPriority\tBurst Time\tWaiting Time\tTurn Around Time\tArrival Time\n");
    for(int i=0; i<n; i++)
    {
        printf("P%d\t\t%d\t\t%d\t\t%d\t\t%d\t\t\t\t%d\n", P[i], Pr[i], BT[i], WT[i], TT[i], AT[i]);
    }
}

int main(){
    int n;
    printf("Enter the total number of process: ");
    scanf("%d", &n);
    int P[100], Pr[100], BT[100], WT[100], AT[100], TT[100];
    printf("Enter Pid | Priority | BT | AT :\n");
    for(int i = 0; i < n; i++){
        scanf("%d%d%d%d", &P[i], &Pr[i], &BT[i], &AT[i]);
    }
    waitingTime(n, P,AT, BT, WT, Pr);
    turnAroundTime(n,BT,WT,TT);
    printArr(n ,P, Pr, BT, WT,TT, AT);
}
