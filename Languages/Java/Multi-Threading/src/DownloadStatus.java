import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class DownloadStatus {
    private int totalBytes ;
    // private LongAdder totalBytes = new LongAdder();
    // private AtomicInteger totalBytes = new AtomicInteger();
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

    /*
     * atomicObject
     * 
     * public void increamentBytes() {
     * synchronized (synchronizedObject) {
     * totalBytes.incrementAndGet();
     * }
     * }
     * 
     * public int getTotalBytes() {
     * return totalBytes.get();
     * }
     */

    // public void increamentBytes() {
    // synchronized (synchronizedObject) {
    // totalBytes++;
    // }
    // }

    /*
     * Adders
     * 
     * public void increamentBytes() {
     * totalBytes.increment();;
     * }
     * 
     * public int getTotalBytes() {
     * return totalBytes.intValue();
     * }
     */

    public void increamentBytes() {
    totalBytes++;
    }

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
