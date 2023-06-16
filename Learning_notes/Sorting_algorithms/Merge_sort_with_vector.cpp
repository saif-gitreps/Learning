#include <bits/stdc++.h>
using namespace std;
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

void merge(vector<int> &a,int mid,int left,int right){
   vector<int> b;
   int p1=left,p2=mid+1;
   while(p1<=mid && p2<=right){
      if(a[p1]<=a[p2]){
         b.push_back(a[p1++]);
      }
      else{
         b.push_back(a[p2++]);
      }
   }
   while(p1<=mid){
      b.push_back(a[p1++]);
   }
   while(p2<=right){
      b.push_back(a[p2++]);
   }
   int k =0;
   for(int p=left;p<=right;p++){
      a[p] = b[k++];
   }
}

void mergyboy(vector<int> &a,int left,int right){
   if(left>=right){
      return;
   }
   int mid = left + (right-left)/2;
   mergyboy(a,left,mid);
   mergyboy(a,mid+1,right);
   merge(a,mid,left,right);
}

int main(){
   vector<int> a = {6,5,9,3,10,15,12,16,0};
   mergyboy(a,0,a.size()-1);
   for(int i =0;i<a.size();i++){
      cout<< a[i]<< " ";
   }
}
