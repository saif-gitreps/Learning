#include <bits/stdc++.h>
using namespace std;
#define ll long long int
#define newline() "\n"
#define enter_arr(x,n) for(int i=0;i<n;i++)cin>>x[i]
#define out_arr(x,n) for(int i=0;i<n;i++)cout<<x[i]<<" "
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
#define pb push_back
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;

int part(vector<int> &a,int start, int end){
   int pivot = a[end];
   int i=start,j=end;
   int pindex = start;
   for(int i=start;i<end;i++){
      if(a[i]<=pivot){
         swap(a[i],a[pindex]);
         pindex++;
      }
   }
   swap(a[pindex],a[end]);
   return pindex;
}

void quicksort(vector<int> &a,int left,int right){
   if(left>=right){
      return;
   }
      int j = part(a,left,right);
      quicksort(a,left,j-1);
      quicksort(a,j+1,right);
}

int main(){
   vector<int> a = {6,5,9,3,10,15,12,16,INT_MAX};
   quicksort(a,0,9);
   for(auto s:a){
      cout<<s<<" ";
   }
}