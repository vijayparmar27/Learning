public class LambdaDemo {
    public static void showWithfunctionalInterface() {
        greet(new functionalInterface());
    }

    private static void greet(PrinterIF printer){
        printer.print("---->> LambdaDemo :: ");
    }

}
