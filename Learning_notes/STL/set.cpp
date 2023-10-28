#include<bits/stdc++.h>
using namespace std;


void test(){
   set<pair<int,string>> s;
   int n = 3;
   while(n--){
      int x;
      string y;
      cin>>x>>y;
      s.insert({-x,y});
   }
   set<pair<int,string>>::iterator it = s.begin();
   while(it != s.end()){
      cout<<it->first<<" "<<it->second<<"\n";
      it++;
   }
   /* conclusion:
      1 hi
      2 lmn
      2 lmo
      -2 lmn
      -2 lmo
      -1 hi
   so above are the input and below is the output , now lets say we are dealing with 
   all positive values(for integer pair value of the set) , inserting with -ve sign ,
   will hypothecially make it work like priority queue where elements that are large are sorted first.
   I mean it appears like -5 -3 -2 but if we can work our way around that minus sign (which we can easily)
   then it is basically like using a priority queue functionality where largest is at first.
   
   Second point is that , we see no matter what , if they are of the same value, even if the first value
   is negative , the string is stored in lexographical order which means we can see that "lmn" came before "lmo".
   
   auto &cuisine = food_cuis.find(food)->second; 
   The auto &cuisine part declares cuisine as a reference to the value retrieved from the map. 
   Using a reference means that cuisine is not a copy of the value but directly refers to the value in the map. This is often done when you want to modify the value in the map through the reference, and the reference ensures that any changes made to cuisine are reflected in the map.

   */
}

int main(){
   test();
}
 