public class DownloadFileTask implements Runnable {

    private DownloadStatus downloadStatus;

    public DownloadFileTask(DownloadStatus downloadStatus) {
        this.downloadStatus = downloadStatus;
    }

    public DownloadFileTask(){

    }

    @Override
    public void run() {
        System.out.println("Download Start :: ");
        System.out.println("current Thred :: " + Thread.currentThread().getName());

        /*
         * #JOIN
         * 
         * try {
         * Thread.sleep(5000); // pause threed
         * } catch (InterruptedException e) {
         * e.printStackTrace();
         * }
         * System.out.println("Download Complate.");
         */

        // for (var i = 0; i < Integer.MAX_VALUE; i++) {
        for (var i = 0; i < 1_00_000; i++) {

            if (Thread.currentThread().isInterrupted()) {
                System.out.println("thread interrupted :: 1 ::");
                return;
            }

            downloadStatus.increamentBytes();
            // System.out.println("Download Data :: " + i);
            
        }
        downloadStatus.done();
        
        synchronized(downloadStatus){
            downloadStatus.notifyAll();
        }


    }

}
