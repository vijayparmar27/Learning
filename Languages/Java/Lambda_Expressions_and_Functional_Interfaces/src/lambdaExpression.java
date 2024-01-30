public class lambdaExpression {
    

    public static void showWithlambdaExpression(){
        greet(message -> System.out.println(message));
    }

    private static void greet(PrinterIF printer){
        printer.print("---->> lambdaExpression :: ");
        System.out.println("-------");
    }
}
