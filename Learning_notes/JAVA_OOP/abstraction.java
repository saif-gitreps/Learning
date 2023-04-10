package abstractclass;
/*
 So, in a way, you can say that an abstract class provides a template for the classes that inherit from it.
 However, it's important to note that not all abstract classes are templates,
 and not all templates are abstract classes. Templates can be implemented using other mechanisms,
 such as interfaces, generics, or even plain old classes.
 */
abstract public class Shape {
    public abstract double showArea();
    // interesting , abstract methods cannot have a body.
    public void printArea(){
        System.out.println("AREA : "+ showArea());
        // + cannot be used with void methods so i switched to area.
    }
}

package abstractclass;

public class Circle extends Shape{
    private int radius;
    public Circle(int radius){
        this.radius = radius;
    }
    @Override
    public double showArea(){
        return this.radius * 3.14;
        }
}
package abstractclass;

public class Rect extends Shape{
    private int length,bread;
    Rect(int width,int len){
        bread = width;
        length = len;
    }
    public double showArea(){
        return length*bread;
    }

}

package abstractclass;

public class Employee extends Company{
    @Override
    void print(){
        System.out.println("hello");
    }
    public static void main(String args[])
    {
        Circle c1 = new Circle(34);
        Rect r1 = new Rect(456,456);
        c1.printArea();
        r1.printArea();

    }
}

