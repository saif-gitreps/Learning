#include <bits/stdc++.h>
/*             ::Pasteboard::
===========================================

===========================================
*/
using namespace std;
#define s(x) sizeof(x)/sizeof(x[0]);
#define ll long long int

/*==================================================*/

// one thing to note here is that passing an argument as sum+a[i] and sum+= a[i] and then passing argument are two different
// thing so do play around with these stuffs and figure it out.

void rev(int i,int a[],vector<int>& ds,int n,int sum,int target){
   if(i==n){
      if(sum==target){
         for(auto s: ds){
            cout<<s << " ";
         }
         cout<<"\n";
      }
      return;
   }  
   ds.push_back(a[i]);
   sum += a[i];
   rev(i+1,a,ds,n,sum,target);
   sum -= a[i];
   ds.pop_back();
   rev(i+1,a,ds,n,sum,target);
}


int main(){
   int a[] = {1,2,1};
   int n = s(a);
   vector<int> ds;
   rev(0,a,ds,n,0,2);

return 0;}




   









