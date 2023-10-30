#include<stdio.h>
int wt_time(int p[],int n,int bt[],int wait_time[]){
    wait_time[0] = 0;
    int i,j;
    for(i = 0 ; i < n; i++){
        for(j = i + 1; j < n; j++){
            if(bt[i] > bt[j]){
                int temp = bt[i];
                bt[i] = bt[j];
                bt[j] = temp;

                temp = p[i];
                p[i] = p[j];
                p[j] = temp;
            }
        }
    }
    for(i = 1; i < n; i++){
        wait_time[i] = bt[i-1] + wait_time[i-1];
    }
    return 1;
}

int tat_time(int p[],int n, int bt[], int wait_time[], int tat[]){
    int i = 0;
    for(i = 0; i < n; i++){
        tat[i] = bt[i] + wait_time[i];
    }
    return 1;
}

int avg_time(int p[], int n, int bt[]){
    int wait_time[n], tat[n], total_wt = 0, total_tat = 0;
    wt_time(p,n,bt,wait_time);
    tat_time(p,n,bt,wait_time,tat);

    int i;
    printf("process \t |Burst time \t |waiting time \t |turn around time\n");
    for(i = 0 ; i < n ; i++){
        total_wt += wait_time[i];
        total_tat += tat[i];
        printf("%d \t %d \t %d \t %d\n",p[i],bt[i],wait_time[i],tat[i]);
    }
    printf("avg waiting time: %.4f", (float)total_wt/n);
    printf("avg turn around time: %.4f", (float)total_tat/n);
    return 1;
}

int main(){
    int p[100], bt[100],n;
    printf("Enter number of processes: \n");
    scanf("%d",&n);
    int i = 0;
    printf("Enter process id and burst time: \n");
    for(i = 0; i < n; i++){
        scanf("%d%d", &p[i],&bt[i]);
    }
    //for(i = 0; i < n; i++){
    //    printf("%d", bt[i]);
    //}
    avg_time(p,n,bt);
}
