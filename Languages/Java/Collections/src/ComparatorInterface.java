import java.util.Comparator;

public class ComparatorInterface implements Comparator<ComparableInterface>{

    @Override
    public int compare(ComparableInterface o1, ComparableInterface o2) {
        return o1.getEmail().compareTo(o2.getEmail());
    }

    
        
}
