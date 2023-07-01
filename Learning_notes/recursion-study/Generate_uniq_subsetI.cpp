#include <bits/stdc++.h>
using namespace std;
#define ll long long int
#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;


void kev(int ind,vector<int> &a,vector<vector<int>> &ans){
   if(ind>=a.size()){
      ans.push_back(a);
      return;
   }
   for(int i = ind;i<a.size();i++){
      swap(a[ind],a[i]);
      kev(ind+1,a,ans);
      swap(a[ind],a[i]);
   }
}

int main(){
   vector<int> a = {1,2,3};
   vector<vector<int>> ans = {};
   vector<int> ds; 
   vector<bool> mapping(10000,false); 
   kev(0,a,ans);
   //sort(ans.begin(),ans.end());
   for(auto s: ans){
      for(auto x:s){
         cout<<x<<" ";
      }
      cout<<" | ";
   }
   
   
}