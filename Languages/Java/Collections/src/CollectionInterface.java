import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

public class CollectionInterface {
    
    
    public static void run(){
        Collection<String> collection = new ArrayList<>();
        collection.add("111");
        collection.add("222");

        Collections.addAll(collection,"333","4444");

        collection.remove("111");
        // collection.clear();

        for (var item : collection){
            System.out.println("------ " + item);
        }

        System.out.println("---- size :: " + collection.size());
        System.out.println("---- isEmpty :: " + collection.isEmpty());
        System.out.println("---- contains :: " + collection.contains("222"));

        Object[] objectArray = collection.toArray();
        objectArray[0].toString();

        String[] stringArray = collection.toArray(new String[0]);

        stringArray[0].length();
    }


}
