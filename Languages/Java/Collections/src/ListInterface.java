import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ListInterface {

    public static void run(){

        List<String> list = new ArrayList<>();

        list.add("111");

        Collections.addAll(list,"222", "333");

        list.set(0,"000");

        list.remove(0);

        list.indexOf("111");

        list.lastIndexOf("222");

        list.subList(0, 1);

        


    }

}
