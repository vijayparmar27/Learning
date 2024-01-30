package Build_In_Functional_Interface;

import java.util.List;
import java.util.function.Consumer;

public class ConsumerInterface {

    public static void showConsumerInterface() {

        List<String> list = List.of("a", "b","c","d");

        /*
         * 
         * // Imperative Programing
         * for (var item : list) {
         * System.out.println(item);
         * }
         */

        /*
         * 
         * // Declarative Programing
         * list.forEach((item) -> System.out.println(item));
         */

         /*
          * Chaining Consumer
          */

          Consumer<String> print = item -> System.out.println(item);
          Consumer<String> printUpperCase = item -> System.out.println(item.toUpperCase());

        //   list.forEach(print);
          list.forEach(print.andThen(printUpperCase));


    }

}
