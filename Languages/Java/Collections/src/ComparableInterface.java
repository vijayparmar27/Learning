import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComparableInterface implements Comparable<ComparableInterface>{
    

    private String name;
    private String email;

    public ComparableInterface(String name, String email){
        this.name = name;
        this.email = email;
    }

    @Override
    public int compareTo(ComparableInterface o) {
        return name.compareTo(o.name);
    }

    @Override
    public String toString(){
        return name;
    }
    
    public String getName(){
        return name;
    }
    public String getEmail(){
        return email;
    }

    public void setName(String newName){
        name = newName;
    }
    public void setEmail(String newEmail){
        email = newEmail;
    }

    public static void run(){
        List<ComparableInterface> list = new ArrayList<>();

        list.add(new ComparableInterface("dev", "@dev22"));
        list.add(new ComparableInterface("dev1", "@dev1"));

        // Collections.sort(list); // for use for add Comparable interface

        
        Collections.sort(list,new ComparatorInterface());
        System.out.println("--- list :: " + list);
    }

}
