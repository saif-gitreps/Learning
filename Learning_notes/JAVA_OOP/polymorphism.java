/*
so polymorphism concept is one function that will be overwritten according to the parameters we provide,

Function Overloading: It is a feature in C++ where multiple functions can have
the same name but with different parameter lists. The compiler will decide which function to call based
on the number and types of arguments passed to the function.

Operator Overloading: It is a feature in C++ where the operators such as +, -, * etc.
can be given additional meanings when applied to user-defined data types.

*/

package polymorph;
//this is a simple example for compile polymorphism.
public class Person {

    public void eat(int a){
        System.out.println("this is an integer");
    }
    public void eat(String a){
        System.out.println("This is a string");
    }
    public void eat(float a){
        System.out.println("this is a float");
    }
    public static void main(String args[]){
        Person saif = new Person();
        saif.eat(4);
        saif.eat("hello");
        saif.eat(5.6F);
    }
}
// this is an example of run time polymorphism 

package polymorph;

public class Person {

    public void eat(int a){
        System.out.println("this is an integer");
    }
    public void eat(String a){
        System.out.println("This is a string");
    }
    public void eat(float a){
        System.out.println("this is a float");
    }
    public void sleep(){
        System.out.println("adult sleeps");
    }
}

package polymorph;

public class Child extends Person{
    public void sleep(){
        System.out.println("child sleeps");
    }
    public static void main(String args[]){
        Person saif = new Person();
        Child sara = new Child();
        saif.sleep();
        sara.sleep();
    }
}

