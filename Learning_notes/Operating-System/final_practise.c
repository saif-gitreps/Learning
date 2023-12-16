#include<stdio.h>

int wt_time(int pid[], int n ,int pri[], int bt[], int rem_bt[], int wt[], int at[]){
    int completed = 0;
    int t  = 0;
    while( completed < n ){
        int s = -1;
        int m = 100;
        for(int i = 0 ; i < n; i++){
            if(at[i] <= t && rem_bt[i] > 0 && pri[i] < m){
                s = i;
                m = pri[i];
            }
            else if(at[i] <= t && rem_bt[i] > 0 && pri[i] == m && at[i] < at[s]){
                s = i;
                m  = pri[i];
            }
            else if(at[i] <= t && rem_bt[i] > 0 && pri[i] == m && at[i] == at[s] && pid[i] < pid[s]){
                s = i;
                m = pri[i];
            }
            else {
                //
            }
        }
        if(s == -1){
            t ++;
            continue;
        }
        rem_bt[s] --;
        if(rem_bt[s] == 0){
            completed++;
            wt[s] = t + 1 - at[s] - bt[s];
        }
        t++;
    }
    return 1;
}

int tat_time(int n ,int wt[], int bt[], int tat[]){
    for(int i = 0 ; i < n; i ++){
        tat[i] = wt[i] + bt[i];
    }
    return 1;
}

int print(int pid[], int n ,int pri[], int bt[], int wt[], int tat[], int at[]){
    printf("pid \t \t pri \t \t BT \t \t WT \t \t TAT \t \t AT\n" );
    for(int i = 0 ; i < n ; i++){
        printf("%d \t \t %d \t \t %d \t \t %d \t \t %d \t \t %d\n", pid[i], pri[i], bt[i], wt[i], tat[i], at[i]);
    }
    return 1;
}

int main(){
    int bt[100], wt[100], tat[100], pri[100], at[100], rem_bt[100], pid[100];
    int n;
    printf("Enter number of processes: \n");
    scanf("%d", &n);
    printf("Enter pid, bt, priority, at: \n");
    int i = 0;
    for(i = 0; i < n ; i++){
        scanf("%d %d %d %d", &pid[i], &bt[i], &pri[i], &at[i]);
        rem_bt[i] = bt[i];
    }
    
    wt_time(pid, n, pri, bt, rem_bt,wt, at);
    tat_time(n, wt, bt, tat);        
    print(pid, n, pri, bt, wt, tat,at);
    
}
