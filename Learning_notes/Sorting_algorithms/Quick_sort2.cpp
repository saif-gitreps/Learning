#include <bits/stdc++.h>
using namespace std;

1 - find the first element greater tha n pivot . and then stop at there.

2- then from right side , find the first element smaller than the pivot.

3. while traversing from right if you dont find any value smaller than pivot, still continue traversing.
same goes for the left as well.

4. if right crosses left , then we stop.

5. So the goal on entire loop is to make all the elements greater than pivot to the right side of it, and to make the elemets smaller than pivot, to the left side of pivot.

6.NOTE: if low is lesser than high , then that means that are more than 1 elements smaller

7.NOTE: low >= high means one element only.

#define FAST(SUIII); ios_base::sync_with_stdio(false);cin.tie(NULL);
const int MAXN = 100010;
int partition(vector<int> &a,int low ,int high){
   int left = low; int right = high;
   int pivot = a[low];
   while(left<right){
      while(a[left]<=pivot && left<high){
         left++;
         // finds the first element greater than pivot.
      }
      while(a[right]>pivot && right>low){
         right--;
         // finds the first smaller element than pivot.
      }
      if(left<right){
         swap(a[left],a[right]);
      }
   }
   // this swap will work anyway because either way the left is 
   // gonna be greater or equal to
   // high because the outer loop has to work
   // doubt was why does this executeed regardless , well because , when do we actually do this condition , when our left>right yea? well that's what happeed if noticed in the outer loop , left became greater or equal to right that's why we stopped , so we are fulfilling the condition regardless.
   swap(a[low],a[right]);
   return right;
}

void quickyboy(vector<int> &a,int low,int high){
   if(low>=high){
      return;
   }
   int partition_index = partition(a,low,high);
   quickyboy(a,low,partition_index-1);
   quickyboy(a,partition_index+1,high);
}


int main(){
   vector<int> a = {6,5,9,3,10,10,15,12,16,0,5};
   quickyboy(a,0,a.size()-1);
   for(int i=0;i<a.size();i++){
      cout<< a[i]<< " ";
   }
}
