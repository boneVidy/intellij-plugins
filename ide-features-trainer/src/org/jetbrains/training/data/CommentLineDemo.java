
public class CommentLineDemo {

    public int fib(int n) {
        int a = 1;
        int b = 1;

        int tmp;

        if (n < 2) return 1;

        for (int i = 0; i < (n - 1); i++) {
            tmp = b;
            b = a;
            a = a + tmp;
        }

        return a;
    }
}
