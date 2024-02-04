import java.util.HashMap;
import java.util.Map;

public class mapInterface {
    public static void run(){
        Map<String,ComparableInterface> map = new HashMap<>();

        var c1 = new ComparableInterface("dev1", "@dev1");
        var c2 = new ComparableInterface("dev2", "@dev2");
        var unkwon = new ComparableInterface("unkwon", "");

        map.put(c1.getName(),c1);
        map.put(c2.getName(),c2);

        map.get(c1.getName());
        map.getOrDefault("de", unkwon);
        map.containsKey("dev1");
        // map.replace(c1,unkwon);

        for (var key : map.keySet()){

        }
        for (var entrySet : map.entrySet()){
            entrySet.getKey();
            entrySet.getValue();
        }

        for(var value : map.values()){
            
        }

        System.out.println(map);
    }
}
