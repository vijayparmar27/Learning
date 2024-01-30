public class AnomousInnerClass {

    public static void showWithAnomousInnerClass() {
        greet(new PrinterIF(){
       
            @Override
            public void print(String message) {
                System.out.println(message);
            }
        });
    }

    private static void greet(PrinterIF printer) {
        printer.print("---->> AnomousInnerClass :: ");
    }
}
