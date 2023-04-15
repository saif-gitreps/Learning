package prctice1.try1;

import prctice1.GoogleClassroom;

public class Teacher {
    String name;
    String emailID;
    GoogleClass[] taughtClass;
    private int classCount = 0;
    public Teacher(String name, String emailID){
        name = this.name;
        emailID = this.emailID;
        taughtClass = new GoogleClass[5];
        for(int i =0;i<5;i++){
            taughtClass[i] = null;
        }
    }
    public GoogleClass createClass(String courseName){
        GoogleClass c = new GoogleClass(courseName);
        this.taughtClass[this.classCount] = c;
        return c;
    }
     void postMaterial(GoogleClass c,Material m){
        c.materialsList[c.matCount1++] = m;

    }
    public void viewAllStd(GoogleClass c){
        for(int i=0;i<c.stdCount1;i++){
            System.out.println(c.enrolledStudents1[i].name+ " "+c.enrolledStudents1[i].emailID);
            System.out.println();
        }
    }
}
