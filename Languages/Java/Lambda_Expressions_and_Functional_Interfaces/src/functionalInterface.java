public class functionalInterface implements PrinterIF{

    @Override
    public void print(String message) {
        System.out.println("---->> functionalInterface :: " + message);
    }
}
