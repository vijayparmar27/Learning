public class GenericList<T extends Number> {

    private T[] items = (T[]) new Object[10];

    private int count = 0;
    
    public void addItem(T item) {
        items[count++] = item;
    }

    public T getItem(int index) {
        return items[index];
    }

    public static void run(){
        // var list = new GenericList<Integer>();
        GenericList<Integer> list = new GenericList<>();

        list.addItem(1);

        int value = list.getItem(0);
        System.out.println("----- value :: " + value);
        
    }
    
}
