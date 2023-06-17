#include <bits/stdc++.h>
using namespace std;
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

void bubble_rec(vector<int> &a,int i,int j){
   if(i>=a.size()-1){
      return;
   }
   if(a[j]>a[j+1] && j+1<a.size()){
      swap(a[j],a[j+1]);
   }
   if(j>=a.size()-i-1 && i<a.size()-1){
      bubble_rec(a,i+1,0);
   }
   else{
      bubble_rec(a,i,j+1);
   }
}

int main(){
   vector<int> a = {6,5,9,3,10,15,12,16,0};
   bubble_rec(a,0,0);
   for(int i=0;i<a.size();i++){
      cout<< a[i]<< " ";
   }
}
