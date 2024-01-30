public class VariableCapture {

    private static String prefix = "---";
    private String prefix1 = "---";

    public static void showWithVariableCapture() {
        greet(message -> System.out.println(prefix + message));
    }

    public void showWithVariableCapture1() {
        greet(message -> System.out.println(prefix1 + message));
        greet(message -> System.out.println(this.prefix1 + message));
    }

    private static void greet(PrinterIF printer) {
        printer.print("---->> VariableCapture :: ");
    }

}
