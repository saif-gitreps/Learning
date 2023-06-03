#include <bits/stdc++.h>
/*             ::Pasteboard::
===========================================

===========================================
*/
using namespace std;
#define s(x) sizeof(x)/sizeof(x[0]);
#define ll long long int
#define newline() "\n"
#define nexline() std::cout<<newline()
#define enter_arr(x,n) for(int i=0;i<n;i++)cin>>x[i]
#define out_arr(x,n) for(int i=0;i<n;i++)cout<<x[i]<<" " 
#define debug(a) cerr<< "line "<<__LINE__ <<" : "<< #a <<" --> "<<(a)<<"\n"
#define GGG 9223372036854775807
#define pb push_back
#define pf push_front
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;
vector<int> find_factors(int n){vector<int> f;
for (int x=2;x*x<=n;x++)
{while(n%x==0) {f.push_back(x);n /= x;} }
if (n > 1) f.push_back(n);return f; }
/*==================================================*/

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




   









