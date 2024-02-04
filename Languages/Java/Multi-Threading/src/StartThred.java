public class StartThred {

    public static void run() {
        System.out.println("Thred :: " + Thread.currentThread().getName());
        System.out.println("Thred activeCount:: " + Thread.activeCount());
        System.out.println("Thred Available:: " + Runtime.getRuntime().availableProcessors());

        // for (var i = 0; i < 10; i++) {
        // Thread thread = new Thread(new DownloadFileTask());
        // thread.start();
        // }

        Thread thread = new Thread(new DownloadFileTask());
        thread.start();

        /*
         * For wait for other thread to complate work block main thread
         * #JOIN
         * 
         * try {
         * thread.join(); // block main threed
         * } catch (InterruptedException e) {
         * e.printStackTrace();
         * }
         * System.out.println("now you can file proccess...");
         */

        
        /*
         * Thread Interrupt
         */
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("thread interrupted ::");

        thread.interrupt();

    }
}
