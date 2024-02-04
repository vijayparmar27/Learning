import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class DownloadStatus {
    private int totalBytes;
    private Lock lock = new ReentrantLock();
    private Object synchronizedObject = new Object();
    private volatile boolean isDone;

    /*
     * LOCK
     * 
     * public void increamentBytes() {
     * lock.lock();
     * try {
     * totalBytes++;
     * } finally {
     * lock.unlock();
     * }
     * }
     */

    /**
     * 
     * 
     * public void increamentBytes() {
     * synchronized (this) {
     * totalBytes++;
     * }
     * }
     * 
     * public void increamentBytes() {
     * synchronized (synchronizedObject) {
     * totalBytes++;
     * }
     * }
     * 
     * public synchronized void increamentBytes() {
     * totalBytes++;
     * }
     */

    public void increamentBytes() {
        synchronized (synchronizedObject) {
            totalBytes++;
        }
    }

    // public void increamentBytes() {
    //     totalBytes++;
    // }

    public int getTotalBytes() {
        return totalBytes;
    }

    public boolean isDone() {
        return isDone;
    }

    public void done() {
        isDone = true;
    }
}
