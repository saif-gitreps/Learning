package prctice1.try1;


public class GoogleClass {
    String courseTitle;
    Material[] materialsList;
    Student[] enrolledStudents1;
    int matCount1 = 0;
    int stdCount1 = 0;
    public GoogleClass(String courseTitle){
        courseTitle =this.courseTitle;
        materialsList = new Material[5];
        enrolledStudents1 = new Student[5];
        for(int i =0;i<5;i++){
            materialsList[i] = null;
            enrolledStudents1[i]  = null;
        }
    }
    void DisplayAllMat(){
        for(int i=0;i<this.matCount1;i++){
            System.out.println(this.materialsList[i].topicName+" "+this.materialsList[i].topicURL);
         System.out.println();
        }
    }
}
