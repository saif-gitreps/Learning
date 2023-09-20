int pivot_index = 0;
for(int i = 0 ; i < nums.size() ; i ++){
    if( nums[i] <= pivot){
    swap(nums[i] , nums[pivot_index]);
    pivot_index++;
    }
}
swap(nums[pivot_index],nums[pivot_location]);