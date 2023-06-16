NOTE: this doesnt work but i just tried lmao
#include <bits/stdc++.h>
using namespace std;
#define ll long long int
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

void insertion_rec(vector<int> &a,int i,int j,int mn){
   if(i>=a.size()){
      return;
   }
   if(a[j]<a[mn] && j<a.size()){
      insertion_rec(a,i,j+1,j);
   }
   else{
      insertion_rec(a,i,j+1,mn);
   }
   if(j>=a.size()){
      swap(a[i],a[mn]);
      insertion_rec(a,i+1,i+1,i+1);
   }
}

int main(){
   vector<int> a = {6,5,9,3,10,15,12,16,0};
   insertion_rec(a,0,1,0);
   for(int i=0;i<a.size();i++){
      cout<< a[i]<< " ";
   }
}
