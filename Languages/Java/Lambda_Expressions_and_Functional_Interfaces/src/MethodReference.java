public class MethodReference {

    public MethodReference(String messaString) {

    }

    public static void showWithMethodReference() {

        // greet(message -> System.out.println(message));
        // greet(System.out::println);

        greet(message -> print(message));
        greet(MethodReference::print);

        // greet(message -> new MethodReference(message));
        // greet(MethodReference::new);

        MethodReference methodReference = new MethodReference("");
        // greet(message -> methodReference.print1(message));
        greet(methodReference::print1);


    }

    private static void greet(PrinterIF printer) {
        printer.print("---->> MethodReference :: ");
    }

    private static void print(String message) {
        System.out.println(message);
    }

    private void print1(String message) {
        System.out.println(message);
    }
}
