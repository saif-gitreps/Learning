//First Come, First Serve Algorithm
#include<iostream>
#include<bits/stdc++.h>

using namespace std;

void waiting_time(int process[] , int n , int burst_time[], int wait_time[]){
   wait_time[0] = 0;
   int i;
   for(i = 1 ; i < n; i++){
      wait_time[i] = burst_time[i - 1] + wait_time[i -1];
   }
}

void turn_around_time(int process[], int n,int burst_time[], int wait_time[], int tat[]){
   int i;
   for(i = 0; i < n ;i ++){
      tat[i] = burst_time[i] + wait_time[i];
   }
}

void avg_time(int process[], int n ,int burst_time[]){
   int wait_time[n], tat[n];
   int i, total_wt = 0, total_tat = 0;

   waiting_time(process, n ,burst_time, wait_time);
   turn_around_time(process, n, burst_time, wait_time, tat);
   
   for(i = 0; i < n; i++){
      total_wt += wait_time[i];
      total_tat += tat[i];
   }
   
   printf("Average waiting time: %.4f\n", (float)total_wt/n);
   printf("Average turn around time: %.4f\n", (float)total_tat/n);
}

int main() {
   int process[] = {1, 2, 3};
   int n = sizeof(process)/sizeof(process[0]);
   int burst_time[] = {10, 5, 8};

   avg_time(process, n ,burst_time);

}
 
