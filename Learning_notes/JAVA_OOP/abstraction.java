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
