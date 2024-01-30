package Build_In_Functional_Interface;

import java.util.function.Supplier;

public class SupplierInterface {

    public static void showSupplierInterface() {

        Supplier<Double> getRandom = () -> Math.random();

        var result = getRandom.get();

        System.out.println("----- showSupplierInterface :: " + result);

    }

}
