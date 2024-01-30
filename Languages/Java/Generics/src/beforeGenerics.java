public class beforeGenerics {

    // private int[] items = new int[10];
    private Object[] items = new Object[10];
    private int count = 0;

    public void addNumer(int number){
        items[count++] = number;
    }

    public int getNumer(int number){
        return (int)items[number];
    }

    public void addItem(Object item){
        items[count++] = item;
    }

    public Object getItem(int number){
        return items[number];
    }

    public static void run(){
        var generic = new beforeGenerics();
        generic.addNumer(10);

        generic.addItem("developer");

        int value = generic.getNumer(0);
        System.out.println("----- value :: " + value);
        Object value1 = generic.getItem(1);
        System.out.println("----- value1 :: " + value1);
    }


}
