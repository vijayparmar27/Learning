import java.util.Iterator;

public class IterablesList<T> implements Iterable<T> {

    private T[] items = (T[]) new Object[10];

    private int count = 0;

    public void addItem(T item) {
        items[count++] = item;
    }

    public T getItem(int index) {
        return items[index];
    }

    @Override
    public Iterator<T> iterator() {
        return new ListIterator(this);
    }

    public static void run() {
        var list = new IterablesList<String>();

        list.addItem("123");
        list.addItem("456");

        var iterator = list.iterator();

        /*
         * 
         * while (iterator.hasNext()) {
         * var current = iterator.next();
         * System.out.println("---- "+ current);
         * }
         */

        for (var item : list) {
            System.out.println("---- " + item);
        }

    }

    private class ListIterator implements Iterator<T> {
        private IterablesList<T> list;
        private int index;

        public ListIterator(IterablesList<T> list) {
            this.list = list;
        }

        @Override
        public boolean hasNext() {
            return index < list.count;
        }

        @Override
        public T next() {
            return list.items[index++];
        }
    }

}
