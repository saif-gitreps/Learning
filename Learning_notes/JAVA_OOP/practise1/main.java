public class Main {

	public static void main(String[] args) {
		
		Material m1 = new Material("Threading", "http//hhvv");
		Material m2 = new Material("Exception", "http//hfhvv");
		
		Student s1 = new Student("Rahim", "rahim@gmail.com");
		Student s2 = new Student("Karim", "karim@gmail.com"); 
		
		Teacher t1 = new Teacher("Mr. A", "a@gmail.com");
		
		GoogleClass c1 = t1.createClass("OOP");
		
		t1.postMaterial(c1, m1);
		t1.postMaterial(c1, m2);
		
		s1.joinClass(c1);
		s2.joinClass(c1);
		
		t1.viewAllStd(c1);
		
		s1.viewMaterials(c1);
	
	}

}
