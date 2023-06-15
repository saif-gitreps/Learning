void selection(vector<int> &a){
   // selection is bascally just pointing one pivot, 
   // from 0...n and we have anothe loop
   // it'll be i+1, and itll finnd the smallest
   // number from i+1 till n, and then swap that 
   // small number with the pivot. 
   int n = a.size();
   for(int i=0;i<n;i++){
      int mn = i;
      for(int j=i+1;j<n;j+=1){
         if(a[j]<a[mn]){
            mn= j;
         }
      }
      swap(a[i],a[mn]);
   }
}
