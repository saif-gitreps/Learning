#include<bits/stdc++.h>

using namespace std;

void sack(int n, vector<float> weight,vector<float> profit, float capacity){
    vector<float> x(n);
    float tp = 0;
    int u  = capacity,i,j;
    for(int i=0;i<n;i++){
        x[i] = 0.0;
    }
    for(i=0 ; i < n ; i ++) {
        if ( weight[i] > u) {
            break;
        }
        else{
            x[i] = 1.0;
            tp = tp + profit[i];
            u = u - weight[i];
        }
    }
    if( i < n ){
        x[i] = u / weight[i];
    }
    tp = tp  + (x[i] * profit[i]);
    
    cout<< "The resultant vector is: \n";
    for(int i= 0;i < n; i++){
         cout<<x[i]<<" ";
    }
    printf("Max Profit -> %f.7\n",tp);
}

int main(){
    int n;
    cout<<"Enter number of items: \n";
    cin>>n;

    vector<float> weight(n),profit(n),r(n);
    float capacity,temp;
    int num,i,j;

    cout<<"Enter Weight Space Profits: \n";
    for(int i=0;i<n;i++){
        cin>>weight[i]>>profit[i];
    }

    cout<<"Enter knapsack capacity: \n";
    cin>>capacity;

    for(int i=0;i<n;i++){
        r[i] = profit[i] / weight[i] ;
    }
    
    for(int i = 0; i < n; i++){
        for ( int j = i + 1; j < n; j++){
            if( r[i] < r[j]){
                temp = r[j];
                r[j] =  r[i];
                r[i] = temp;
                
                temp = weight[j];
                weight[j] = weight[i];
                weight[i] = temp;
                
                temp = profit[j];
                profit[j] = profit[i];
                profit[i] = temp;
            }
        }
    }
    sack(n,weight,profit,capacity);

}
