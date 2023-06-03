#include <bits/stdc++.h>
/*             ::Pasteboard::
===========================================

===========================================
*/
using namespace std;
#define s(x) sizeof(x)/sizeof(x[0]);

// technique to print only one ans

int rev(int i,int a[],vector<int>& ds,int n,int sum,int target){
   if(i==n){
      if(sum==target){
         return 1;
      }
      return 0;
   }  
   ds.push_back(a[i]);
   sum += a[i];
   int num1 = rev(i+1,a,ds,n,sum,target);
   sum -= a[i];
   ds.pop_back();
   int num2 = rev(i+1,a,ds,n,sum,target);
   return num1+num2;
}


int main(){
   int a[] = {1,2,1};
   int n = s(a);
   vector<int> ds;
   cout<<rev(0,a,ds,n,0,2);

return 0;}




   









