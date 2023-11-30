/*
Date : 26 november 2023
Shortest Remaining Time First (SRTF) is a preemptive scheduling algorithm used
in operating systems for CPU scheduling. 
In this algorithm, the process with the smallest 
total remaining processing time is the one to execute next. 
SRTF is a variation of the Shortest Job Next (SJN) or Shortest Job First (SJF) scheduling algorithm.
*/

#include<stdio.h>

int WaitingTime(int n, int PID[],int BT[], int REM_BT[], int AT[], int WT[]){
    int t, count = 0;
    REM_BT[50] = 100;

    for (t = 0 ; count != n ; t++){

        int m = 50;

        for (int i = 0; i < n; i++){
            if (AT[i] <= t &&  REM_BT[i] < REM_BT[m] && REM_BT[i] > 0 )
            {
                m = i ;
            }
            else if(AT[i] <= t && REM_BT[i] > 0 &&  REM_BT[i] == REM_BT[m] && AT[i] < AT[m]){
                m = i;
            }
            else if(AT[i] <= t && REM_BT[i] > 0 &&  REM_BT[i] == REM_BT[m] && AT[i] == AT[m] && PID[i] < PID[m]){
                m = i;
            }
            else{
                //return 1;
                //return REM_BT[m];
            }
        }

        REM_BT[m] = REM_BT[m] - 1;

        if (REM_BT[m] == 0){
            count++;
            WT[m] = t+1 - (BT[m] + AT[m]) ;
        }

    }
    return 0;
}


void TurnArroundTime(int n, int PID[],  int BT[], int WT[], int TAT[]){
    for (int i = 0; i < n ; i++){
        TAT[i] = BT[i] + WT[i];
    }
}

void printAll(int n ,int PID[], int BT[] ,int AT[], int WT[] , int TAT[])
{
    printf ("\nProcess ID\tBurst Time\tArrival Time\tWaiting Time\tTurnaround Time\n");
    for(int i=0 ; i<n ;i++)
    {
        printf("P%d\t\t%d\t\t%d\t\t%d\t\t%d\n",PID[i],BT[i],AT[i],WT[i],TAT[i]);
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

int main(){
    int n;
    printf("Enter the number of process : ");
    scanf ("%d",&n);


    int PID[100] , BT[100] , REM_BT[100], AT[100] , WT[100] , TAT[100];
    printf("Enter : process ID | burst time | arrival time :\n");
    for(int i=0 ; i < n ; i++){
        scanf("%d%d%d",&PID[i],&BT[i],&AT[i]);
        REM_BT[i] = BT[i];
    }

    WaitingTime(n , PID, BT , REM_BT , AT , WT);
    TurnArroundTime(n, PID, BT, WT, TAT);
    printAll(n ,PID, BT ,AT ,WT, TAT);
    average(n ,WT, TAT);

}
