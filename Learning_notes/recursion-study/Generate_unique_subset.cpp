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

void kev(int ind,vector<int> a,vector<int> &ds,vector<vector<int>> &ans){
   //so why do we skip a[i]==a[i+1]?
   //because if you dont , it will begin another root to generate 
   //duplicates , example:
   // a ={1,2,2} , lets say a ds is at {1}, and now i is at 1.
   // so a[i] == 2 (note:first occurence of 2) . We push it in , 
   // now ds is {1,2} ,then the next recursion happens, now i get i++, so i==2 (which is the second 2).
   // now , if we push this in [note:we are in the call where ds=={1} , the ds=={1,2} is already called],
   // we'll get another ds call containing {1,2} and {1,2}.  
   // now if you say then how do we generate subsets of ds = {2,2} from a={1,2,2}
   // WEll , how that happens is when a condition of a[i]==a[i+1] is false,
   // then we send a recurison call after adding the non duplicate in the ds.
   //cso the doubt about for(j=0;j<a.size()-1;j++) . here u meant to ask
   // well if the j cant reach the full array then it wont get accessed right?
   // well no , it will , how? . If were at the last 2 elements at the end 
   // of the array , and a[j]!=a[j+1], we push a[j] and then in the func call
   // we push in j+1 , which is the last element , now the last element indeed 
   // did get accessed , in a cheeky way. 
   // our main goal of the entire revursion is to avoid making duplicate root call.  
      ans.push_back(ds);
      for(int i = ind;i<a.size()-1;i++){
         if(i!=ind && a[i]==a[i+1]){
            continue;
         }
         ds.push_back(a[i]);
         kev(i+1,a,ds,ans);
         ds.pop_back();
         // this pop_back exists because once we 
         // travsered entire array , we go up the recursion tree,
         // we not pick(popping last ds) and then we send the next availabble index 
         // from the FOR loop.
      }

}

int main(){
   vector<int> a = {1,2,2,2,3,3};
   vector<vector<int>> ans = {};
   vector<int> ds; 
   kev(0,a,ds,ans);
   //sort(ans.begin(),ans.end());
   for(auto s: ans){
      for(auto x:s){
         cout<<x<<" ";
      }
      cout<<" ";
   }
   
   
}