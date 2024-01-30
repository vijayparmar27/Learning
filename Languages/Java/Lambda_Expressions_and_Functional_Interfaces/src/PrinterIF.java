public interface PrinterIF {
    public void print(String message);

    default void printTwice(String message){
        System.out.println("printTwice :: 1 :: " + message);
        System.out.println("printTwice :: 2 :: " + message);
    }
}
