import java.util.ArrayList;
import java.util.List;

public class ThreadLearn {

    public static void run() {
        var status = new DownloadStatus();

        List<Thread> threads = new ArrayList<>();

        for (var i = 0; i < 10; i++) {
            var thread = new Thread(new DownloadFileTask(status));
            thread.start();
            threads.add(thread);
        }

        for (var thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("status :: " + status.getTotalBytes());
    }

    public static void confinement() {

        List<Thread> threads = new ArrayList<>();
        List<DownloadStatus> task = new ArrayList<>();

        for (var i = 0; i < 10; i++) {
            var status = new DownloadStatus();
            var thread = new Thread(new DownloadFileTask(status));
            thread.start();
            threads.add(thread);
            task.add(status);
        }

        for (var thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        var totalBytes = task.stream()
                .map(m -> m.getTotalBytes())
                .reduce(Integer::sum);
        System.out.println("totalBytes :: " + totalBytes);

    }

    public static void lock() {
        var status = new DownloadStatus();

        List<Thread> threads = new ArrayList<>();

        for (var i = 0; i < 10; i++) {
            var thread = new Thread(new DownloadFileTask(status));
            thread.start();
            threads.add(thread);
        }

        for (var thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("status :: " + status.getTotalBytes());
    }

    public static void synchronizedKey() {
        var status = new DownloadStatus();

        List<Thread> threads = new ArrayList<>();

        for (var i = 0; i < 10; i++) {
            var thread = new Thread(new DownloadFileTask(status));
            thread.start();
            threads.add(thread);
        }

        for (var thread : threads) {
            try {
                thread.join();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

        System.out.println("status :: " + status.getTotalBytes());
    }

    public static void volatileKey() {
        var status = new DownloadStatus();

        var thread1 = new Thread(new DownloadFileTask(status));
        var thread2 = new Thread(() -> {
            while (!status.isDone()) {
            }
            System.out.println("getTotalBytes " + status.getTotalBytes());
        });

        thread1.start();
        thread2.start();
    }

    public static void signalling() {
        var status = new DownloadStatus();

        var thread1 = new Thread(new DownloadFileTask(status));
        var thread2 = new Thread(() -> {
            synchronized (status) {
                try {
                    status.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println("getTotalBytes " + status.getTotalBytes());
        });

        thread1.start();
        thread2.start();
    }

}
