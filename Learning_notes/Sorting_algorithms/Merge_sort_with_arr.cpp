#include <bits/stdc++.h>
using namespace std;
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

void merge(int a[],int mid,int left,int right){
   int b[100];
   int p1=left,p2=mid+1;
   int i=0;
   while(p1<=mid && p2<=right){
      if(a[p1]<=a[p2]){
         b[i] = a[p1++];
      }
      else{
         b[i] = a[p2++];
      }
      i++;
   }
   while(p1<=mid){
      b[i++] = a[p1++];
   }
   while(p2<=right){
      b[i++] = a[p2++];
   }
   int k =0;
   for(int p=left;p<=right;p++){
      a[p] = b[k++];
   }
}

void mergyboy(int a[],int left,int right){
   if(left>=right){
      return;
   }
   int mid = left + (right-left)/2;
   mergyboy(a,left,mid);
   mergyboy(a,mid+1,right);
   merge(a,mid,left,right);
}

int main(){
   int a[100] = {6,5,9,3,10,15,12,16,0};
   mergyboy(a,0,8);
   for(int i =0;i<9;i++){
      cout<< a[i]<< " ";
   }
}
