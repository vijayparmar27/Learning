import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executors;
import java.util.function.Supplier;

public class ExecutiveFramework {

    public static void threadPool() {
        var executor = Executors.newFixedThreadPool(2);

        System.out.println("--- current thread :: " + Thread.currentThread().getName());

        for (var i = 0; i < 10; i++) {
            executor.submit(() -> {
                System.out.println("Thread " + Thread.currentThread().getName());
            });
        }

        executor.shutdown();
    }

    public static void callableAndFutures() {
        var executor = Executors.newFixedThreadPool(2);

        System.out.println("--- current thread :: " + Thread.currentThread().getName());

        var future = executor.submit(() -> {
            longTask();
            System.out.println("Thread " + Thread.currentThread().getName());
            return 1;
        });

        System.out.println("---- callableAndFutures :: ");

        try {
            // block opration in Tread
            var result = future.get();
            System.out.println("---- callableAndFutures :: result :: " + result);

        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }

    public static void longTask() {

        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

    public static void synchronousPrograming() {

        // Runnable runnable = () -> System.out.println("-- a");
        // var future = CompletableFuture.runAsync(runnable);
        
        Supplier<Integer> runnable = () -> 1;
        
        var future = CompletableFuture.supplyAsync(runnable);

        try {
            var result = future.get();
            System.out.println("---- result :: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

    }

}
