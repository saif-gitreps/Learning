int partiton(vector<int> a,int left,int right){
   int l = left;
   int r = right;

   // a[l] is our pivot.

   while( l < r){
      if(a[l+1]  <= a[l]){
         swap(a[l+1] , a[l]);
         l++;
      }
      else if(a[r] > a[l]){
         r--;
      }
      else{
         // this condition is triggered when
         // a[l + 1] is greater than pivot 
         // and a[r] is smaller than pivot. 
         swap(a[r] , a[l + 1 ]);
      }
   }
   return l;
}