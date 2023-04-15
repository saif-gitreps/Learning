package prctice1.try1;

import prctice1.GoogleClassroom;

public class Student {
    String name;
    String emailID;
    GoogleClass[] enrolledClasses;
    int classCount =0;
    public Student(String name,String emailID){
        name = this.name;
        emailID = this.emailID;
        enrolledClasses = new GoogleClass[5];
        for(int i=0;i<5;i++){
            enrolledClasses[i] = null;
        }
    }
    void joinClass(GoogleClass c){
        c.enrolledStudents1[c.stdCount1++] = this;
        this.enrolledClasses[this.classCount++] = c;
    }
    public void viewMate(GoogleClass c){
        c.DisplayAllMat();
    }
}
