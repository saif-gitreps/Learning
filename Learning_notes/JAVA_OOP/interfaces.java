public class test implements Prey,Predator{
    @Override
    public void flee(){
        System.out.println("hello");
}
    @Override
    public void hunts(){
        System.out.println("nice");
    }
    @Override
    public void eatGrass(){
        System.out.println("not hello world");
    }
public static void main(String args[]){
        test t1 = new test();
        t1.flee();
        t1.hunts();
        t1.eatGrass();
}
}


//================================================

public interface Prey {
    void flee();
    default void eatGrass(){
        System.out.println("hello world");
    }

}

//===============================================

public interface Predator {
    void hunts();
}
